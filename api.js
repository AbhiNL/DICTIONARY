import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    dictionary_api: {
      type: "app",
      app: "dictionary_api",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`,
    })
  },
})