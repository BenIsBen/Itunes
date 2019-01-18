var Globalcount = 0;
var randomStartSeaches= ["Cage the Elephant", "Tame Impala", "Bon Jovi", "ACDC", "Oliver Tree"];
var artist = "";
var limit = "10";
$(function(){
    Globalcount = 0;
    $("#counter").html("Searches: " + Globalcount).css("font-family", "American Typewriter");
    $("#titleCard").html("*iTunes* <br> find your bops").css("font-size", "72px").css("text-align", "center").css("font-family", "American Typewriter");
    var startParameter = Randomy();
    $("#Radio").html("<select id='many'><option value='10'>10</option><option value='25'>25</option><option value='50'>50</option>").css("text-align", "center");
    $("#searchBar").html("Search terms: <input type='text' id='Bar'><button id='go' onclick='Go()'>Search</button>").css("text-align", "center").css("font-size", "40px").css("font-family", "American Typewriter");
    $("#Bar").css("height", "22px").css("position", "relative").css("bottom", "6px");
    $("#go").css("height", "28px").css("position", "relative").css("bottom", "6px");
    artist = startParameter;
    $.get("http://itunes.apple.com/search?limit=" + limit + "&term=" + artist,Grab);
});
function Randomy(){
    var which =Math.floor(Math.random() * (5));
    console.log(which);
    var who = randomStartSeaches[which];
    return who;
}
function Grab(x) {
    what = JSON.parse(x);
    if(what.resultCount != 0){
        $("#table").html("").append("<tr id='rowname'></tr>").css("margin", "auto").css("font-family", "American Typewriter").css("font-size", "30px");
        $("#rowname").append("<td id='names1'>Rank</td>").append("<td id='names2'>Artist</td>").append("<td id='names3'></td>").append("<td id='names4'>Song Name</td>").append("<td id='names5'>Album Name</td>").append("<td id='names6'></td>");
        for(var i = 0; i < limit; i++){
            $("#table").append("<tr id='row" + i + "'></tr>");
            var thisId = "#row" + i;
            var which = what.results[i];
            console.log(which);
            var who = which.artistName;
            $(thisId).append("<td id='rank" + i + "'>" + (i + 1) + "</td>");
            $(thisId).append("<td id='artist" + i + "'>" + who + "</td>");
            var art = which.artworkUrl100;
            $(thisId).append("<td id='art" + i + "'><img src='" + art + "'></td>");
            var track = which.trackName;
            $(thisId).append("<td id='track" + i + "'><a href=\'http://localhost:63342/Itunes1/detail.html?term=" + artist + "&song=" + i + "'>" + track + "</a></td>");
            var album = which.collectionName;
            $(thisId).append("<td id='album" + i + "'>" + album + "</td>");
            var preview = which.previewUrl;
            $(thisId).append("<td id='art" + i + "'><audio controls><source src='" + preview + "'</audio></td>");
        }
    }else{
        $("#table").html("0 Results Found");
    }
}
function Go(){
    var who = $("#Bar").val();
    var many = $("#many").val();
    limit = many;
    console.log(many);
    console.log(who);
    artist = who;
    $.get("http://itunes.apple.com/search?limit=" + limit + "&term=" + artist,Grab);
    Globalcount++;
    $("#counter").html("Searches: " + Globalcount).css("font-family", "American Typewriter");
}
