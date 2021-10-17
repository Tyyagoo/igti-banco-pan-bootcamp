package Package01;

import java.util.Scanner;

public class Programa03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double nota1 = 0, nota2 = 0, nota3 = 0, notaTotal = 0, freq = 0;
        double notaCorte = 50, freqCorte = 60;

        System.out.println("Digita a primeira nota:");
        nota1 = sc.nextDouble();
        System.out.println("Digita a segunda nota:");
        nota2 = sc.nextDouble();
        System.out.println("Digita a terceira nota:");
        nota3 = sc.nextDouble();
        System.out.println("Digita a frequência:");
        freq = sc.nextDouble();

        notaTotal = nota1 + nota2 + nota3;
        if (notaTotal >= notaCorte && freq >= freqCorte) {
            System.out.println("Aprovado!");
        } else if (notaTotal >= (notaCorte - notaCorte * 0.2) && freq >= freqCorte) {
            System.out.println("Prova especial.");
        } else if (notaTotal >= 80) {
            System.out.println("Aprovado direto");
        } else {
            System.out.println("Reprovado");
        }
    }
}
