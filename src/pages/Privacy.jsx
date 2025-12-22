import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import policyMarkdown from "../contents/Privacy.md?raw";
import "./Privacy.css";

const Privacy = () => {
  console.log("policyMarkdown:", policyMarkdown);
  return (
    <div
      className="privacy-policy page"
      style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml>
        {policyMarkdown}
      </ReactMarkdown>
    </div>
  );
};

export default Privacy;
