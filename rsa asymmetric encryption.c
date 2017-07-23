#include<stdio.h>
#include<math.h>

int gcd(int a, int b)
{
	if(a == 0)
		return b;
	return gcd(b%a, a);
}

// assuming key not too large
int main()
{
	// two primes random
	double p = 3;
	double q = 7;

	double n = p*q;

	double e = 2;
	double phi = (p-1)*(q-1);

	while(e < phi)
	{
        if(gcd(e, phi) == 1)
			break;
		else
			e++;
	}

	int k = 2;
	double d = (1+(k*phi))/e;

	double msg = 12;
	printf("message: %1f", msg);

	double c = pow(msg, e);
    c = fmod(c, n);
    printf("\nencrypted: %1f", c);

    // decrypting m = (c^d)%n
    double m = pow(c, d);
    m = fmod(m, n);
    printf("\nOriginal message %1f", m);

    return 0;
}
