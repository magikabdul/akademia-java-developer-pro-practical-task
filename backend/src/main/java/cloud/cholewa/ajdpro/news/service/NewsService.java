package cloud.cholewa.ajdpro.news.service;

import cloud.cholewa.ajdpro.news.dto.NewsResponse;

import java.util.List;

public interface NewsService {

    List<NewsResponse> fetchAllBusinessNewsForPoland();
}
