package Package01;

import java.util.Scanner;

public class Programa02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int value1 = 0, value2 = 75, value3 = 0;
        System.out.println("Digite o primeiro valor:");
        value1 = sc.nextInt();
        value2 += value1;

        if (value1 % 2 == 0) {
            value3 = value1 * 5;
        } else if (value1 % 3 == 0) {
            value3 = value2 * 9;
        } else {
            value3 = value2;
        }

        System.out.printf("O valor final é: %d\n", value3);
    }
}
