/**
 * Format number to remove decimals (round to nearest integer)
 * @param {string|number} value - The value to format
 * @returns {string} Formatted number without decimals
 */
export function formatNumber(value) {
    if (value === null || value === undefined || value === '') {
        return '0'
    }
    const num = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(num)) {
        return '0'
    }
    return Math.round(num).toString()
}

/**
 * Format price (can keep decimals if needed, but default removes them)
 * @param {string|number} value - The price value
 * @returns {string} Formatted price
 */
export function formatPrice(value) {
    if (value === null || value === undefined || value === '') {
        return '0'
    }
    const num = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(num)) {
        return '0'
    }
    // Round to nearest integer for price
    return Math.round(num).toString()
}



