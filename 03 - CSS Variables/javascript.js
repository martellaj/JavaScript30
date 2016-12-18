const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const input = this.name;
    const value = this.value;
    const suffix = input === 'base' ? '' : 'px';

    document.documentElement.style.setProperty(`--${input}`, value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));