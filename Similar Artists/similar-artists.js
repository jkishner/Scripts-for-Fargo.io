Similar Artists
	var band = op.getLineText();
	band = band.trim();
	var newband = band.replace(" ","+"); 
	similar = '<a href="http://www.music-map.com/' + newband + '.html">Music-Map</a> | <a href="http://www.tastekid.com/like/' + newband + '">TasteKid</a> | <a href="http://findtheband.com/?q=' + newband + '">Find the Band</a> | <a href="http://www.similar-artist.com/similarto/artist/' + newband + '" "="">Similar-Artist</a>';
	op.insert(similar,right);
	op.attributes.setOne("icon","map-marker");
