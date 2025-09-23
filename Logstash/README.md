# Logstash

Logstash is an open-source server-side data processing pipeline that:

- Ingests data from multiple sources,

- Transforms and enriches it,

- Sends it to a storage backend (like Elasticsearch, S3, or others).


## Architecture
	  +-----------+       +----------+       +--------------+
  | Data      | --->  | Logstash | --->  | Destination  |
  | Sources   |       | Pipeline |       | (Elasticsearch, etc) |
  +-----------+       +----------+       +--------------+

Logstash works using a pipeline of stages:

1. Input – Where data comes from (e.g., files, syslog, Kafka, Beats, HTTP).

2. Filter – How data is processed (e.g., parsed, cleaned, enriched).

3. Output – Where data goes (e.g., Elasticsearch, S3, file).

## Pipeline Components:

### Input Plugins

Tell Logstash where to get data from. some of the common input plugins are

- file – Tail log files

- beats – Receive data from Filebeat

- tcp / udp – For raw log streams

- http – Accept logs via HTTP POST

- kafka – Ingest from Kafka topics

- stdin – Standard input (for testing)


	input {
  file {
    path => "/var/log/nginx/access.log"
    start_position => "beginning"
  }
}


## Filter Plugins

Common filter plugins
