export const formatAmountForDisplay = (cents: number, currency: string): string => {
	const numberFormat = new Intl.NumberFormat(["en-US"], {
		style: "currency",
		currency: currency,
		currencyDisplay: "symbol",
	});

	const dollars = cents / 100;
	return numberFormat.format(dollars);
};

export const formatAmountForStripe = (amount: number, currency: string): number => {
	const numberFormat = new Intl.NumberFormat(["en-US"], {
		style: "currency",
		currency: currency,
		currencyDisplay: "symbol",
	});
	const parts = numberFormat.formatToParts(amount);
	let zeroDecimalCurrency = true;
	for (const part of parts) {
		if (part.type === "decimal") {
			zeroDecimalCurrency = false;
		}
	}
	return zeroDecimalCurrency ? amount : Math.round(amount * 100);
};
