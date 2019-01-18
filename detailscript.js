var song = "";
var what = "";
var things= ["artistId", "artistName", "artworkUrl100", "trackName" , "collectionCensoredName", "collectionExplicitness", "isStreamable", "primaryGenreName", "trackTimeMillis", "trackPrice"];

$(function(){
    var start = getQueryParameter("term");
    song = getQueryParameter("song");
    $.get("http://itunes.apple.com/search?limit=" + 50 + "&term=" + start,Find);
});








function getQueryParameter(name)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}

function Find(x){
    what = JSON.parse(x);
    var cut = what.results[song];
    console.log(cut);
    for(var i = 0; i < things.length; i++){
        var temp = things[i];
        console.log(temp);
    }
}
