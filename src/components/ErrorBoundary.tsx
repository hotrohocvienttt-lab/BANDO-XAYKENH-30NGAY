import React, { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if ((this as unknown as { state: State }).state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFFEFB] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
            <h2 className="text-xl font-bold text-[#0B2D46] mb-3">
              Đã xảy ra sự cố hiển thị
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Vui lòng làm mới trang để tiếp tục trải nghiệm.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#FF4F00] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e04500] transition-all cursor-pointer"
            >
              Làm Mới Trang
            </button>
          </div>
        </div>
      );
    }

    return (this as unknown as { props: Props }).props.children;
  }
}
