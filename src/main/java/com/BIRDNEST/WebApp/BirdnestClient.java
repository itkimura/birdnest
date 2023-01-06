package com.BIRDNEST.WebApp;

import com.BIRDNEST.WebApp.Data.*;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class BirdnestClient implements IBirdnestClient {
    private final HttpClient client;
    private final XmlMapper xmlMapper;
    private final JsonMapper jsonMapper;

    public BirdnestClient() {
        this.client = HttpClient.newBuilder()
                .build();

        this.jsonMapper = JsonMapper.builder()
//                .configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false)
                .build();

        this.xmlMapper = XmlMapper.builder()
                //.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .build();
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