import { auth } from "@clerk/nextjs/server";
import TimeAgo from "react-timeago";
import TimeAgoText from "./TimeAgoText";
import { ITranslation } from "@/mongodb/models/user";
import DeleteTranslationButton from "./DeleteTranslationHistory";

const getLanguage = (code: string) => {
  const lang = new Intl.DisplayNames(["en"], { type: "language" });
  return lang.of(code);
};

async function TranslationHistory() {
  const { userId } = auth();

  const url = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://lang-learn-git-main-zainbux99gmailcoms-projects.vercel.app`
  }/api/translationHistory?userId=${userId}`;
  

  const response = await fetch(url, {
    next: {
      tags: ["translationHistory"],
    },
  });

  const { translations }: { translations: Array<ITranslation> } =
    await response.json();

  return (
    <div className="">
      <h1 className="text-3xl my-5">History</h1>

      {/* Show a message if there are no translations */}
      {translations.length === 0 && (
        <p className="mb-5 text-gray-400">No translations yet</p>
      )}

      {/* Show a list of translations */}
      <ul className="divide-y border rounded-md">
        {translations.map((translation) => (
          <li
            key={translation._id}
            className="flex justify-between items-center p-5 hover:bg-gray-50 relative"
          >
            <div>
              <p className="text-sm mb-5 text-gray-500">
                {getLanguage(translation.from)}
                {" -> "}
                {getLanguage(translation.to)}
              </p>

              <div className="space-y-2 pr-5">
                <p>{translation.fromText}</p>
                <p className="text-gray-400">{translation.toText}</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 absolute top-2 right-2">
              <TimeAgoText
                date={new Date(translation.timestamp).toISOString()}
              />
            </p>

            <DeleteTranslationButton id={translation._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TranslationHistory;