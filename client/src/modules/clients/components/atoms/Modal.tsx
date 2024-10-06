import { IconX } from "@tabler/icons-react";

interface ModalProps {
  id: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Modal({ id, children }: ModalProps) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal overflow-hidden" role="dialog">
        <div className="modal-box">
          <div className="flex justify-end">
            <label className="cursor-pointer" htmlFor={id}>
              <IconX />
            </label>
          </div>
          <div className="lg:p-5">{children}</div>
        </div>
      </div>
    </>
  );
}
