#!/bin/sh
# use after compose up to fill solr with data
docker-compose exec --user=solr documentstore bin/solr create_core -c companies
docker-compose exec --user=solr documentstore bin/post -c companies example/exampledocs/manufacturers.xml