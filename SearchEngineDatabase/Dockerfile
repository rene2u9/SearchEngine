FROM solr

#CMD ["/opt/solr/bin/solr", "-f"]

WORKDIR /documents
COPY . /documents

RUN /opt/solr/bin/solr start
RUN /opt/solr/bin/solr create_core -c companies
RUN /opt/solr/bin/post -c companies example/exampledocs/manufacturers.xml
#RUN /opt/solr/bin/post -c companies documents/*
