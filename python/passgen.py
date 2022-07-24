# Password Generator



import sys
import argparse

options = {
        "length": 6,
        "lower": False,
        "upper": False,
        "symbol": False,
    }

def generate_password(length, has_lower, has_upper, has_numeric, has_symbols):
    pass

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
            
        -s, --symbol
            include symbol characters
            
    EXAMPLES
        passgen 8
            generate 8 character password, in lowercase by default
            
        passgen 12 -upper --symbol
            generate 12 character password using uppercase and symbol characters
    
    AUTHOR
        Written by Mohammed (Jahed) Hossain

    """
    print(print_help.__doc__)

def parse_args(argv):
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
        else:
            sys.exit("error: invalid options specified")
    
    # valid numeric passwor dlength
    if argv[1].isnumeric():
        options['length'] = argv[1]
    else:
        sys.exit("error: a valid numeric password length must be provided")
            
    for i in range(2, len(argv)):
        if is_option(argv[i]):
            process_option(argv[i])
        else:
            sys.exit('error: invalid arguemnts')

    # default to lowercase if upper and symbol is not selected
    options['lower'] = True if (not (options['upper'] or options['symbol'])) else options['lower']

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print_help()
        sys.exit(0)
        
    parse_args(sys.argv)
    print(options)
    