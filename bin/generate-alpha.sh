#!/usr/bin/env bash

TARGET=img/patterns

rm -rf css/backgrounds.css && touch css/backgrounds.css
rm -rf "$TARGET" && mkdir -p "$TARGET"

for f in "$@"
do
  cls=`basename "$f" | cut -f 1 -d.`
  dark="$TARGET/$cls-0.png"
  light="$TARGET/$cls-1.png"

  convert "$f" -alpha copy -channel A -negate "$light"
  optipng -o6 "$light" > /dev/null 2>&1 &

  convert "$f" \( -clone 0 -threshold 0 \) +swap -alpha copy -compose copy_opacity -composite "$dark"
  optipng -o6 "$dark" > /dev/null 2>&1 &

  echo ".sp-$cls-0 { background-image: url('../$dark'); }" >> css/backgrounds.css
  echo ".sp-$cls-1 { background-image: url('../$light'); }" >> css/backgrounds.css

  echo "$cls"
done
