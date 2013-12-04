#!/usr/bin/env bash

rm index.html & touch index.html
echo '---'        > data.yml
echo 'swatches:' >> data.yml

for f in "$@"
do
  base=`basename "$f"`
  cls=`echo $base | cut -f 1 -d.`
  echo "  - $cls-0" >> data.yml
  echo "  - $cls-1" >> data.yml
done

echo '---' >> data.yml

mustache data.yml bin/template.html > index.html
