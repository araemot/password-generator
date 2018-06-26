deps = dice.png dice48.png dice96.png manifest.json popup.html popup.js
zip : $(deps)
	zip password-generator $(deps)
