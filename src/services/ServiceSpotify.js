class ServiceSpotify extends Service {
    constructor() {
        super();
        // $.ajax(
        //     {
        //         method: "POST",
        //         url: "https://accounts.spotify.com/api/token",
        //         data:{
        //             "grant_type": "client_credentials", 
        //         },
        //         dataType: 'jsonp',
        //         cors: true ,
        //         contentType:'application/json',
        //         //secure: true,
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             //"Authorization":  "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"),
        //         },
        //         beforeSend: function (xhr) {
        //             xhr.setRequestHeader ("Authorization: ", "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"));
        //             //xhr.setRequestHeader ("Access-Control-Allow-Origin: *");
        //         },
        //         success: function(result){
        //             console.log(result);
        //         }
        //     }
        // );
        var invocation = new XMLHttpRequest();
        var url = "https://accounts.spotify.com/api/token";
        var body = 'grant_type:client_credentials';

        if(invocation)
        {
          invocation.open('POST', url, true);
          invocation.setRequestHeader('Authorization', 'Basic ' + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ':' + "c099d5e3e56d4cd9a1547d7b6284125c"));
          invocation.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          invocation.withCredentials = true;
          //invocation.onreadystatechange = handler;
          invocation.send(body); 
        }

        

        // $.ajax(
        //     {
        //     method: "POST",
        //     url: 'https://accounts.spotify.com/api/token',
        //     //dataType: 'jsonp',
        //     xhrFields: {
        //         withCredentials: true,
        //     },
        //     contentType: false,
        // data: {
        //   //code: code,
        //   //redirect_uri: redirect_uri,
        //   grant_type: 'client_credentials'
        // },
        // cors: true,
        // headers: {
        //     //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //     //'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
        //     //'Access-Control-Allow-Origin': '*',
        //     //'Content-Type':'application/x-www-form-urlencoded',
        //     'Authorization': 'Basic ' + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ':' + "c099d5e3e56d4cd9a1547d7b6284125c")
        // },
        // beforeSend: function (xhr){
        //     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // },
        // //json: true
        //     });

        // $.ajax(
        //     {
        //       method: "POST",
        //       url: "https://accounts.spotify.com/api/token",
        //       data: {
        //         "grant_type":    "authorization_code",
        //         //"code": 
        //         "client_secret": "c099d5e3e56d4cd9a1547d7b6284125c",
        //         "client_id":     "d25dbaca45c7415f94f5b0994c05b8ff",
        //       },
        //       success: function(result) {
        //         console.log(result);
        //       },
        //     }
        //   );
        this.spotifyApi = new SpotifyWebApi();
        //this.spotifyApi.
        //this.spotifyApi.setAccessToken('c099d5e3e56d4cd9a1547d7b6284125c');
        //this.spotifyApi.setPromiseImplementation(Q);
    }

    chercher(requete) {
        // this.spotifyApi.searchTracks(requete)
        // .then(function(chansons) {
        //     console.log(chansons);
        //     //return chansons.map(self.construireChanson)
        // })
    }

    construireChanson(chansonJson) {
        let duree  = chansonJson.duration / 1000;

        return new ChansonSoundCloud(chansonJson.title, duree);
    }
}