package com.birdnest.application;

import com.birdnest.application.data.Pilot;
import com.birdnest.application.data.Report;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Component
public class BirdnestClientImpl implements BirdnestClient {
    private final HttpClient client;
    private final XmlMapper xmlMapper;
    private final JsonMapper jsonMapper;

    public BirdnestClientImpl() {
        this.client = HttpClient.newBuilder().build();
        this.jsonMapper = JsonMapper.builder().build();
        this.xmlMapper = XmlMapper.builder().build();
    }

    public Report getReport() throws Exception {
        var request = HttpRequest.newBuilder()
                .uri(URI.create("http://assignments.reaktor.com/birdnest/drones"))
                .build();
        var response = this.client.send(request, HttpResponse.BodyHandlers.ofInputStream());
        var report = this.xmlMapper.readValue(response.body(), Report.class);
        return report;
    }

    public Pilot getPilot(String serialNumber) throws Exception {
        var request = HttpRequest.newBuilder()
                .uri(URI.create("http://assignments.reaktor.com/birdnest/pilots/" + serialNumber))
                .build();
        var response = this.client.send(request, HttpResponse.BodyHandlers.ofInputStream());
        var pilot = this.jsonMapper.readValue(response.body(), Pilot.class);
        return pilot;
    }
}