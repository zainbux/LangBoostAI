import TranslationForm from '../components/TranslationForm';
import TranslationHistory from '../components/TranslationHistory';
import { protectRoute } from '../utils/authUtils';

//type object
export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};

async function TranslatePage() {

    //protected route
    protectRoute();

    //fetch language API
    const response = await fetch(
      "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0",
      {
        next: {
          revalidate: 60 * 60 * 24, //basically caching
        },
      }
    );
  
    const languages = (await response.json()) as TranslationLanguages;

  return (
    <div className='px-10 xl:px-0 mb-20'>
      <TranslationForm languages={languages}/>
      <TranslationHistory />
    </div>
  )
}

export default TranslatePage