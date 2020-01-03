#ifndef _ac_in_H
#define _ac_in_H

#include "ac_in_base.h"

#include "ac_common.h"
#include "ac_io.h"
#include "ac_lz4.h"

#include <sys/types.h>

#include "impl/ac_in.h"

/* ac_in_options_t is declared in impl/ac_in.h and not opaque.  h is expected
   to point to a structure of this type (and not NULL). */
void ac_in_options_init(ac_in_options_t *h);

/* Set the buffer size for reading input from files.  If the input is
   compressed, the buffer_size here is for the uncompressed content.
   Ideally, this would be large enough to support any record in the input.
   If an individual record is larger than the buffer_size, a temporary
   buffer will be created to hold the given record.  The temporary buffer
   should happen as the exception (if at all). */
void ac_in_options_buffer_size(ac_in_options_t *h, size_t buffer_size);

/* This should be called with one of the ac_io_format... methods.

   Prefix format (4 byte length prefix before each record),
   ac_in_options_format(&options, ac_io_prefix());

   Delimiter format (specify a character at the end of a record)
   ac_in_options_format(&options, ac_io_delimiter('\n'));

   Fixed format (all records are the same length)
   ac_in_options_format(&options, ac_io_fixed(<some_length>));

   Other formats may be added in the future such as compressed, protobuf, etc.
*/
void ac_in_options_format(ac_in_options_t *h, ac_io_format_t format);

/* This generally applies to opening compressed files which have a corrupt
   format.  If the format of the file is corrupt, abort() will be called
   instead of prematurely ending the file. */
void ac_in_options_abort_on_error(ac_in_options_t *h);

/* If a file has an incomplete record at the end, the record will be dropped
   unless it this is set. */
void ac_in_options_allow_partial_records(ac_in_options_t *h);

/* If a partial record exists at the end of a file, the record would normally
   be silently dropped (unless partial records are allowed above).  Setting
   this would cause the program to abort on a partial record. */
void ac_in_options_abort_on_partial(ac_in_options_t *h);

/* If a file is not found, abort (instead of treating it as an empty file). */
void ac_in_options_abort_on_file_not_found(ac_in_options_t *h);

/* If a file is empty, abort() */
void ac_in_options_abort_on_file_empty(ac_in_options_t *h);

/* This tag can be useful to distinguish one file from another.  It can also
   be used as follows...

   ac_in_options_tag(&options, <some_int>);
   ac_in_add(h, in, options.tag);
*/
void ac_in_options_tag(ac_in_options_t *h, int tag);

/* Indicate that the contents are compressed (if using a file descriptor or
   buffer).  filenames are determined to be compressed if they end in .gz
   or .lz4.  The buffer_size is the size to buffer compressed content which
   will default to buffer_size. */
void ac_in_options_gz(ac_in_options_t *h, size_t buffer_size);
void ac_in_options_lz4(ac_in_options_t *h, size_t buffer_size);

/* use this function to create an ac_in_t which allows multiple input streams */
ac_in_t *ac_in_ext_init(ac_io_compare_f compare, void *tag,
                        ac_in_options_t *options);

/* When there are multiple input streams, this would keep only the first equal
   record across the streams. */
void ac_in_ext_keep_first(ac_in_t *h);

/* When there are multiple input streams, set the reducer */
void ac_in_ext_reducer(ac_in_t *h, ac_io_reducer_f reducer, void *tag);

/* The tag can be options->tag from init of in if that makes sense.  Otherwise,
  this can be useful to distinguish different input sources. The first param
  h must be initialized with ac_in_init_compare. */
void ac_in_ext_add(ac_in_t *h, ac_in_t *in, int tag);

/* The filename dictates whether the file is normal, gzip compressed (.gz
   extension), or lz4 compressed (.lz4 extension).  If options is NULL, default
   options will be used. NULL will be returned if the file cannot be opened.
*/
ac_in_t *ac_in_init(const char *filename, ac_in_options_t *options);

/* Uses the file descriptor to create the input stream.  options dictate the
   compression state of input.  can_close should normally be true meaning that
   when the ac_in object is destroyed, the file should be closed.
*/
ac_in_t *ac_in_init_with_fd(int fd, bool can_close, ac_in_options_t *options);

/* This creates a stream from a buffer. options dictate the compression state
   of input.  can_free should normally be true meaning that when the ac_in
   object is destroyed, the buffer should be freed. */
ac_in_t *ac_in_init_with_buffer(void *buf, size_t len, bool can_free,
                                ac_in_options_t *options);

/* Count the records and close the cursor */
size_t ac_in_count(ac_in_t *h);

/* Advance to the next record and return it. */
ac_io_record_t *ac_in_advance(ac_in_t *h);

/* Get the current record (this will be NULL if advance hasn't been called or
 * ac_in_reset was called). */
ac_io_record_t *ac_in_current(ac_in_t *h);

/* Make the next call to advance return the same record as the current.  This is
  particularly helpful when advancing in a loop until a given record. */
void ac_in_reset(ac_in_t *h);

/* Return the next equal record across all of the streams.  num_r will be the
   number of streams containing the next record.  It is assumed that each
   stream will have exactly one equal record. If there is only one stream,
   num_r will always be 1 until the stream is finished. */
ac_io_record_t *ac_in_advance_unique(ac_in_t *h, size_t *num_r);

/* Given the comparison function and tag, get all records which are equal and
   return them as an array.  This will work with one or more input streams. */
ac_io_record_t *ac_in_advance_group(ac_in_t *h, size_t *num_r,
                                    ac_io_compare_f compare, void *tag);

/* Destroy the input stream (or set of input streams) */
void ac_in_destroy(ac_in_t *h);

#endif
