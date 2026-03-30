import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI를 보여주도록 상태 업데이트
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 로깅 서비스에 전송 (예: Sentry, LogRocket)
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // 프로덕션에서는 에러 로깅 서비스로 전송
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // 커스텀 폴백 UI
      return (
        <div className="error-container">
          <div className="error-content">
            <h1 className="error-title">😕 앗, 문제가 발생했습니다</h1>
            <p className="error-message">
              예상치 못한 오류가 발생했습니다. 불편을 드려 죄송합니다.
            </p>

            <div className="error-button-group">
              <button onClick={this.handleReset} className="error-button">
                다시 시도
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="error-button-secondary"
              >
                홈으로 돌아가기
              </button>
            </div>

            {/* 개발 모드에서만 에러 상세 정보 표시 */}
            {import.meta.env.DEV && this.state.error && (
              <details className="error-details">
                <summary className="error-summary">
                  에러 상세 정보 (개발 모드)
                </summary>
                <pre className="error-details-pre">
                  {this.state.error.toString()}
                  {"\n\n"}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
