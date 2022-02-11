package cloud.cholewa.ajdpro.news.repository;

import cloud.cholewa.ajdpro.news.dto.NewsResponse;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Service
public class NewsRepository {

    public boolean save(List<NewsResponse> news) throws IOException {
        FileWriter fileWriter = new FileWriter("articles.txt");
        PrintWriter printWriter = new PrintWriter(fileWriter);

        news.forEach(article -> printWriter.printf(
                "Title: %s, Description: %s, Author: %s\n",
                article.getTitle(), article.getDescription(), article.getAuthor()));

        printWriter.close();
        return true;
    }
}
