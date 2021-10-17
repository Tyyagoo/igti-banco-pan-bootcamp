package Package01;

import java.util.Scanner;

public class Programa01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double n1 = 0, n2 = 0, n3 = 2, result;
        System.out.println("Digita o valor para a variável n1: ");
        n1 = scanner.nextDouble();

        System.out.println("Digita o valor para a variável n2: ");
        n2 = scanner.nextDouble();

        result = n1 * n2 / n3;
        System.out.printf("O valor total é: %.2f", result);
    }
}
