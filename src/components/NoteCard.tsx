import { type Note } from "@prisma/client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="bg-base 100 card mt-5 border border-gray-200 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
          <div className="card-actions mx-2 flex justify-end">
            <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
