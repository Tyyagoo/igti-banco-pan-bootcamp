package igti.desafio.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import igti.desafio.model.Order;
import igti.desafio.model.OrderItem;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

public class OrderDto {

    @Data
    public static class Create {
        private List<OrderItem> items;

        public Order toModel() {
            Order order = new Order();

            order.setState(Order.State.WAITING);
            order.setItems(items);
            order.setDatetime(LocalDateTime.now(ZoneId.of("UTC")));

            return order;
        }
    }

    @Data
    public static class Update {
        private String state;

        public Optional<Order> updateModel(Order model) {
            try {
                model.setState(Order.State.valueOf(state));
            } catch (IllegalArgumentException exp) {
                model = null;
                exp.printStackTrace();
            }

            return Optional.ofNullable(model);
        }
    }

    @Data
    public static class Listed {
        private List<Order> orders;

        public Listed(List<Order> orders) {
              this.orders = orders;
        }
    }
}
