// import { Parts } from "./parts/Parts1";
// import { Parts } from "./parts/Parts2";
import { Parts } from "./parts/Parts3";

// NOTE: Node.js v26でないとサーバーサイドではTemporalは利用できないのでエラーが出る（クライアントサイドだと出ない）
// ただ、Node.js v26に変えたら変えたで、websocket何たらのエラーが出た。websocketのほうが原因よくわからないので、一旦useEffectを利用してクライアントサイドだけで発火するようにして勉強を進める

const Page = () => {
  return (
    <div className="p-4">
      <Parts />
    </div>
  );
};

export default Page;
