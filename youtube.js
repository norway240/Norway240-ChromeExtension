google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://gdata.youtube.com/feeds/api/users/norway24000/uploads");
  feed.setNumEntries(7);
  var count = 1;
  feed.load(function(result) {
	if (!result.error) {
	  var container = document.getElementById("yt");
	  var html = "";
	  for (var i = 0; i < result.feed.entries.length; i++) {
		var entry = result.feed.entries[i];
		html = "<h5 class='post'>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h5>";
		var div = document.createElement("div");
		div.innerHTML = html;
		container.appendChild(div);            
	  }
	  document.write(html);
	}
  });
}
google.setOnLoadCallback(initialize);