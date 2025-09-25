# A fully Dockerized log aggregation system:

we are building below in this project

- Multiple microservices logging to stdout
- Filebeat collecting logs from Docker containers
- logstash parsing and forwarding logs
- elasticsearch indexing logs
- kibana visualizing logs



## Execution steps

We can use "docker-compose up --build" to  build the ELK stack using docker compose.

Once all services are running:

    Visit http://localhost:3001 and http://localhost:3002 to generate logs.

    Open Kibana at http://localhost:5601

Go to Stack Management → Index Patterns

Create a pattern like docker-logs-*

Start visualizing logs in Discover
