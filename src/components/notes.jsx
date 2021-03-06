import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Notes ({
  notes,
  handleNoteDoubleClick,
  handleNoteCheck
}) {
  const hasNotes = notes.length > 0;

  return (
    <div>
      <h2>Notes</h2>
      {hasNotes &&
        <ul className='notes'>
          {notes.map((note, index) => {
            const className = classNames('notes-item', {
              'notes-item--done': note.done,
              'notes-item--highlighted': note.highlighted
            });

            return (
              <li
                key={index}
                className={className}
                onDoubleClick={handleNoteDoubleClick(index)}
              >
                <label>
                  <input
                    type='checkbox'
                    className='notes-itemCheck'
                    onChange={handleNoteCheck(index)}
                  />
                  {note.text}
                </label>
              </li>
            );
          })}
        </ul>
      }
      {!hasNotes && <strong>There is no notes.</strong>}
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
  handleNoteDoubleClick: PropTypes.func,
  handleNoteCheck: PropTypes.func
};
