# Mark-14-Observability
Repo for Observability and monitoring

## Observability
it is the ability to understand the internal state of a system by analyzing the data it produces, including logs,metrics and traces.

## Monitoring(Metrics)
it involves tracking system metrics like CPU usage, memory usage, and network performance.Provides alets based on predefined tresholds and conditions.

## Logging
it involves the collection of log data from various components of a syatem.

### Tracing(Traces)

it involves tracking the flow of a request or transaction as it moves through different services and components within a system.



## installing kube-prometheus-stack
~~~
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
~~~
## Deploy the chart into a new namespace "monitoring"
**Note:** we can install this setup in default namespace if its not working in monitoring name space as expected
~~~
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring
~~~
## Verify the Installation
~~~
kubectl get all -n monitoring
~~~

- **Prometheus UI**:
```bash
kubectl port-forward service/prometheus-operated -n monitoring 9090:9090
```

**NOTE:** If you are using an EC2 Instance or Cloud VM, you need to pass `--address 0.0.0.0` to the above command. Then you can access the UI on <instance-ip:port>

- **Grafana UI**: password is `prom-operator`
```bash
kubectl port-forward service/monitoring-grafana -n monitoring 8080:80
```
- **Alertmanager UI**:
```bash
kubectl port-forward service/alertmanager-operated -n monitoring 9093:9093
```

## Clean up
- **Uninstall helm chart**:
```bash
helm uninstall monitoring --namespace monitoring
```
- **Delete namespace**:
```bash
kubectl delete ns monitoring
```
