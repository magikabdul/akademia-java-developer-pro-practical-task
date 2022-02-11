package cloud.cholewa.ajdpro.news.service;

import cloud.cholewa.ajdpro.news.dto.NewsResponse;
import cloud.cholewa.ajdpro.news.repository.NewsRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {

    private final NewsRepository newsRepository;
    private final ObjectMapper objectMapper;
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    @SneakyThrows
    public List<NewsResponse> fetchAllBusinessNewsForPoland() {
        String url = "https://newsapi.org/v2/top-headlines?q=business&country=pl&apiKey=499c87ca51cf4652b3d38bb974409fd7";

        JsonNode jsonNode = Objects.requireNonNull(restTemplate.getForObject(url, JsonNode.class)).get("articles");
        List<NewsResponse> newsResponses = objectMapper.readValue(jsonNode.toString(), new TypeReference<List<NewsResponse>>() {});

        newsRepository.save(newsResponses);
        return newsResponses;
    }
}
