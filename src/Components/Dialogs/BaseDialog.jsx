const BaseDialog = ({ children, onDismiss }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30"
      onClick={onDismiss}
    >
      <div
        className="bg-slate-100 py-8 px-10 shadow-xl rounded-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BaseDialog;
