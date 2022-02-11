package cloud.cholewa.ajdpro.news.controller;

import cloud.cholewa.ajdpro.news.dto.NewsResponse;
import cloud.cholewa.ajdpro.news.service.NewsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
@CrossOrigin("*")
public class NewsController {

    private final NewsServiceImpl service;

    @GetMapping()
    public ResponseEntity<List<NewsResponse>> getBusinessNewsForPoland() {
        List<NewsResponse> news = service.fetchAllBusinessNewsForPoland();
        return ResponseEntity.ok().body(news);
    }
}
