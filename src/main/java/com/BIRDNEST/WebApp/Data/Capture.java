package com.BIRDNEST.WebApp.Data;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;

import java.time.LocalDateTime;


public record Capture(
        @JacksonXmlProperty(localName = "drone") // Find <drone></drone>
        @JacksonXmlElementWrapper(useWrapping = false) // Find drones inside <capture></capture>
        Drone[] drones,
        //@JsonDeserialize(using = LocalDateTimeDeserializer.class)
        @JsonDeserialize(using = LocalDateTimeDeserializer.class)
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
        LocalDateTime snapshotTimestamp) {
}
