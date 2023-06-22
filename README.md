# Testowanie-Automatyczne
zaliczenie

## 1. Uruchomienie środowiska
**ID**	12345
**Warunki początkowe:**	dostęp do internetu, projekt w Visual Studio Code 2, cypress, chrome

**Krok 1** Otwórz VSC2 i załaduj folder, w którym znajduje się cypress projekt "zaliczenie.cy.js"
**Rezultat:** Projekt otwarty

**Krok 2** W terminalu wpisz npx cypress open
**Rezultat:** Uruchomienie cypress

**Krok 3** Kliknij "E2E testing", zaznacz chrome a następnie kliknij przycisk "start e2e testing in chrome"
**Rezultat:** Srodowisko testowe cypress w chrome otwarte. Możliwośc wyboru wybranego pliku z otwartego w VSC2 do przeprowadzenia testów.

**Krok 4** W otwartym oknie chrome wybierz plik "zaliczenie.cy.js" - kliknij
**Rezultat:** Otwarte okno z testami.

## 2. Zaakceptuj cookies
**ID**	it1
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij biały przycisk w żółtej ramce "Ustawienia zaawansowane"
**Rezultat:** Przycisk kliknięty, przenosi do następnego okna dialogowego

**Krok 4** Otwarte okno dialogowe "Cele przetwarzania danych przez Wydawcę (RASP)". Kliknij jasnożółty przycisk "nie wyrażam zgody"
**Rezultat:** Odrzucone ciasteczka.  Okno dialogowe znika. Przenosi do strony głównej onet.pl

## 3. ustawienia zaawansowane cookies - odrzucenie ciasteczek
**ID**	it2
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij biały przycisk w żółtej ramce "Ustawienia zaawansowane"
**Rezultat:** Przycisk kliknięty, przenosi do następnego okna dialogowego

**Krok 4** Otwarte okno dialogowe "Cele przetwarzania danych przez Wydawcę (RASP)". Kliknij jasnożółty przycisk "nie wyrażam zgody"
**Rezultat:** Odrzucone ciasteczka.  Okno dialogowe znika. Przenosi do strony głównej onet.pl

## 4. sprawdzenie seriali wyświetlanych w TV
**ID**	it3
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** W pasku menu z lewej storny rozwiń pole wyboru i kliknij "program TV"
**Rezultat:** Przenosi do strony z programem TV

**Krok 5** W pasku menu kliknij na pole "co obejrzeć".
**Rezultat:** Pojawia się lista wyboru

**Krok 6** Na liście wyboru kliknij "seriale"
**Rezultat:** Przenosi do strony z programem seriali w TV

## 5. sprawdź pociągi z Białegostoku do Warszawy
**ID**	it4
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** Pod paskiem menu, z prawej strony kliknij pole. opisem "jak dojadę"
**Rezultat:** Przenosi do strony z rozładami jazdy

**Krok 5** Pojawia się okno dialogowe dotyczące danych osobowych. Kliknij "przejdz do serwisu" aby wyrazić zgodę na przetwarzanie danych osobowych
**Rezultat:** Zgoda na przetwarzanie danych wyrażona. Zamknięte okno dialogowe.

**Krok 6** Kliknij żółty przycisk "wybierz miasto ręcznie"
**Rezultat:** 

**Krok 7** W polu "znajdź miasto" wpisz "Białystok"
**Rezultat:** Wyświetla się lista wyboru

**Krok 8** Kliknij w pierwszą propozycję
**Rezultat:** Miasto Białystok wybrane. Pojawia się okno z możliwością wpisania przystanków w Bialymstoku lu wybranie opcji "PKP"

**Krok 9** Kliknij przycisk "PKP"
**Rezultat:** Okno dialogowe z możlwiością ustawienia tras pociągów otwarte.

**Krok 10** W polu "wybierz stację początkową" wpisz "Białystok
**Rezultat:** Pojawia się lista wyboru

**Krok 11** Kliknij w pierwszą podpowiedź "Białystok"
**Rezultat:** Stacja początkowa ustawiona na Białystok

**Krok 12** W polu "Wybierz stację końcową" wpisz "Warszawa Centralna"
**Rezultat:** Pojawia się lista wyboru

**Krok 13** Kliknij pierwszą podpowiedź "Warszawa Centralna"
**Rezultat:** Stacja końcowa ustawiona na Warszawę Centralną

**Krok 14** Kliknij zielone pole z białą strzałką
**Rezultat:** Wyświetla się rozkład jazdy pociągów na trasie Białystok - Warszawa Centralna 

## 6. Logowanie do poczty
**ID**	it5
**Warunki początkowe:**	spełnione warunki z ID12345, dane do logowania

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** W prawym górnym rogu strony, kliknij przycisk z symbolem koperty i opisem "email"
**Rezultat:** Przenosi do panelu logowania

**Krok 5** W polu "adres email" wpisz "testowanko@spoko.pl"
**Rezultat:** dane wprowadzone

**Krok 6** 6. W polu "hasło" wpisz "Polibuda!23"
**Rezultat:** dane wprowadzone

**Krok 7** Kliknij żółty przycisk "dalej", aby się zalogować
**Rezultat:** Dane wprowadzone poprawnie. Przenosi do skrzynki mailowej

## 7. Nieudane logowanie do poczty - niewlasciwy mail
**ID**	it6
**Warunki początkowe:**	spełnione warunki z ID12345, hasło do poczty

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** W prawym górnym rogu strony, kliknij przycisk z symbolem koperty i opisem "email"
**Rezultat:** Przenosi do panelu logowania

**Krok 5** W polu "adres email" wpisz "testowanko@spoko.com"
**Rezultat:** dane wprowadzone

**Krok 6** W polu "hasło" wpisz "Polibuda!23"
**Rezultat:** dane wprowadzone

**Krok 7** Kliknij żółty przycisk "dalej", aby się zalogować
**Rezultat:** Wyświetla komunikat "Nieprawidłowy email lub hasło"

## 8. Nieudane logowanie do poczty - niewlasciwe haslo
**ID**	it7
**Warunki początkowe:**	spełnione warunki z ID12345, hasło do poczty

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** W prawym górnym rogu strony, kliknij przycisk z symbolem koperty i opisem "email"
**Rezultat:** Przenosi do panelu logowania

**Krok 5** W polu "adres email" wpisz "testowanko@spoko.pl"
**Rezultat:** dane wprowadzone

**Krok 6** W polu "hasło" wpisz "Polibuda123"
**Rezultat:** dane wprowadzone

**Krok 7** Kliknij żółty przycisk "dalej", aby się zalogować
**Rezultat:** Wyświetla komunikat "Nieprawidłowy email lub hasło"

## 9. Sprawdzenie aktualnej pogody w Białymstoku
**ID**	it8
**Warunki początkowe:**	spełnione warunki z ID12345, hasło do poczty

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** W lewym górnym rogu strony, pod paskiem menu, wybierz i kliknij na pole, które wskazuje informacje o pogodzie
**Rezultat:** Przenosi na podstronę zawierającą anktualne informacjie o pogodzie

**Krok 5** W polu "wpisz nazwę miejscowości" wpisz "Białystok
**Rezultat:** Rozwija się lista z podpowiedziami

**Krok 6** Kliknij pierwszą pozycję z listy
**Rezultat:** Strona przeladowuje się i wskazuje aktualną pogodę w Białymstoku.

## 10. Wybór najnowszego ogłoszenia mieszkania w Bialymstoku, ustawiając filtry
**ID**	it9
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** Na stronie głównej onet.pl, wybierz z paska menu kategorię "nieruchomości". 
**Rezultat:** Rozwija się lista woboru

**Krok 5** Z listy wyboru wybierz "mieszkanie"
**Rezultat:** Przenosi do strony z ogłoszeniami mieszkań

**Krok 6** Pojawia się okno dialogowe dotyczące danych osobowych. Kliknij "przejdz do serwisu" aby wyrazić zgodę na przetwarzanie danych osobowych
**Rezultat:** Zgoda na przetwarzanie danych wyrażona. Zamknięte okno dialogowe.

**Krok 7** Na pasu z filtrami ustaw: "wynajmę"
**Rezultat:** Filtr ustawiony prawidłowo. Pojawiają sie przefiltrowane oferty

**Krok 8** Na pasku z filtrami wybierz "mieszkanie"
**Rezultat:** Filtr ustawiony prawidłowo. Pojawiają sie przefiltrowane oferty mieszkań

**Krok 9** W kolejnym polu wpisz "Białystok" i wybierz pierwszą dostępną podpowiedź
**Rezultat:** Filtr ustawiony prawidłowo. Pojawiają sie przefiltrowane oferty mieszkań w Białymstoku

**Krok 10** Na pasku z filtrami otwórz zakładkę "więcej filtrów". Po rozwinięciu listy zaznacz checkboxy: liczba pokoi 1 oraz 2, zalety: balkon
**Rezultat:** Filtr ustawiony prawidłowo. Pojawiają sie przefiltrowane oferty mieszkań w Białymstoku, jedno oraz dwupokojowe, z balkonem

**Krok 11** Kliknij w pole "sortuj" 
**Rezultat:** Otwiera się okno dialogowe z możliwościami wyboru sortowania ogłoszeń

**Krok 12** W otwartym oknie dialogowym ustaw sortowanie "data dodania: od najnowszych"
**Rezultat:** Sortowanie ustawione. Oferty mieszkań przesortowane wg najnowszych ogłoszeń

**Krok 13** Kliknij w pierwsze ogłoszenie
**Rezultat:** Ogłoszenie otwarte prawidłowo

## 11. wyszukanie gry
**ID**	it10
**Warunki początkowe:**	spełnione warunki z ID12345

**Krok 1** Otwórz stronę https://www.onet.pl
**Rezultat:** Strona internetowa wczytana prawidłowo

**Krok 2** Pojawia się okno dialogowe dotyczące cookies
**Rezultat:** Możliwośc wyboru dwóch opcji cookies

**Krok 3** Kliknij żółty przycisk "Przejdź do serwisu"
**Rezultat:** Ciasteczka zaakceptowane. Okno dialogowe znika. Przenosi do strony głównej onet.pl

**Krok 4** Nad paskiem menu, z prawej storny, znajdź i kliknij pole z napisem"gry" i ikonką konia szachowego
**Rezultat:** Przenosi do podstrony z grami

**Krok 5** W prawym górnym roku, w polu "szukaj gry", wpisz "mahjong" i kliknij enter
**Rezultat:** Strona wyświetla gry o nazwie mahjong

**Krok 6** Kliknij w grę znajdującą się po prawej stronie - drugą od góry
**Rezultat:** Przenosi na stronę z wybraną grą
