# is-natively-supported

A micro library for building extensions or fallbacks for modern, not fully supported browser APIs such as [Speech Recognition API](https://caniuse.com/#feat=speech-recognition)

```js
import IsNativelySupported from 'is-natively-supported'

class SpeechToText extends IsNativelySupported {

   constructor() {
      super('SpeechRecognition', 'webkitSpeechRecognition') // pass all known names to parent constructor

      if(SpeechToText.isNativelySupported()) {
         // register Speech Recognition API
      } else {
         // register fall back (Google, Watson, ...)
      }
   }

}
```