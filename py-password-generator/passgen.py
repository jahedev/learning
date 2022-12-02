# Password Generator

import sys
import random


class PassGen:
    def __init__(self, length=1, lower=False,
                 upper=False, numeric=False, symbol=False):

        self.length = length
        self.lower = lower
        self.upper = upper
        self.numeric = numeric
        self.symbol = symbol

        self._lower_ascii = 'abcdefghijklmnopqrstuvwxyz'
        self._upper_ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        self._numeric_ascii = '1234567890'
        self._symbol_ascii = '!@#$%^&*'

        self._char_list = []
        self.generate_char_list()

    def generate_char_list(self):
        self._char_list = []

        if self.lower:
            self._char_list += list(self._lower_ascii)
        if self.upper:
            self._char_list += list(self._upper_ascii)
        if self.numeric:
            self._char_list += list(self._numeric_ascii)
        if self.symbol:
            self._char_list += list(self._symbol_ascii)

        random.shuffle(self._char_list)

    def generate_password(self):
        pass_length = self.length
        password = ''

        for i in range(pass_length):
            password += self._char_list[random.randrange(len(self._char_list))]

        return password


def print_help():
    """
    NAME
        passgen - generate passwords and print to standard output

    SYNOPSIS
        passgen [LENGTH] [OPTION]...

    DESCRIPTION
        Generate password using specified options

        -u, --upper
            include uppercase characters

        -l, --lower
            include lowercase characters

        -n, --numeric
            include numeric characters

        -s, --symbol
            include symbol characters

        --amount=AMT
            generate AMT number of passwords with given options 

    EXAMPLES
        passgen 8
            generate 8 character password, in lowercase by default

        passgen 12 --upper --symbol -n
            generate 12 character password using upper, numeric
            and symbol characters

        passgen 10 -u -l -n -s --amount=5
            generate 5, 10 character passwords, with all characters

    AUTHOR
        Written by Mohammed (Jahed) Hossain

    """
    print(print_help.__doc__)


def parse_args(argv):
    options = {
        'length': 1,
        'amount': 1,
        'lower': False,
        'upper': False,
        'numeric': False,
        'symbol': False
    }

    def is_option(arg):
        return arg[0] == '-'

    def process_option(arg):
        # remove dashes
        arg = arg[arg.rfind('-')+1:]

        if arg in {'u', 'upper'}:
            options['upper'] = True
        elif arg in {'l', 'lower'}:
            options['lower'] = True
        elif arg in {'s', 'symbol'}:
            options['symbol'] = True
        elif arg in {'n', 'numeric'}:
            options['numeric'] = True
        elif arg.find('amount=') > -1:
            amount = arg[arg.rfind('=')+1:]
            if amount.isnumeric() and int(amount) >= 1:
                options['amount'] = int(amount)
            else:
                sys.exit("error: amount value must be numeric and >=1")
        else:
            sys.exit("error: invalid options specified")

    # valid numeric password length
    if argv[1].isnumeric():
        pass_length = int(argv[1])
        options['length'] = pass_length if pass_length > 0 else options['length']
    else:
        sys.exit("error: a valid numeric password length must be provided")

    for i in range(2, len(argv)):
        if is_option(argv[i]):
            process_option(argv[i])
        else:
            sys.exit('error: invalid arguemnts')

    # default to lowercase if no other option is specified
    options['lower'] = True if (not (options['upper']
                                     or options['symbol'] or options['numeric'])) else options['lower']

    return options


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print_help()
        sys.exit(0)

    options = parse_args(sys.argv)

    pg = PassGen(options['length'], options['lower'],
                 options['upper'], options['numeric'], options['symbol'])

    for i in range(options['amount']):
        print(pg.generate_password())
    print()
