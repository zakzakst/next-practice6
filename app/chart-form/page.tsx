import { Parts } from "./parts/Parts1";

const Page = () => {
  return (
    <div className="has-background-white" data-theme="light">
      <div className="container">
        <div className="section">
          <Parts />
        </div>
      </div>
    </div>
  );
};

export default Page;
