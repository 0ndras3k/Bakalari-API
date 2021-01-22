export class ContentManager {

    static getContent = (url: string) => {
        const rp = require('request-promise');
        rp(url)
          .then(function(content : any){
            console.log(content);
          })
          .catch(function(err : any){
            //TODO: Handle error
          })
      }

}

export default ContentManager;
