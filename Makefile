default: patterns/*/*.png
	@ bin/generate-alpha.sh $^
	@ bin/generate-index.sh $^
