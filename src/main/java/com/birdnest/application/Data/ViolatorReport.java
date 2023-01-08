package com.birdnest.application.data;


import dev.hilla.Nonnull;

import java.time.LocalDateTime;

public record ViolatorReport(@Nonnull Violator[] violators,
                             @Nonnull LocalDateTime lastUpdated,
                             @Nonnull LocalDateTime moniteringStartDate){
}
