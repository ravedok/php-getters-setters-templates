module.exports = (property) => `        
    public function ${property.getTypeHint() == 'bool' ? 'is' + property.getName().charAt(0).toUpperCase() + property.getName().slice(1)  : property.getterName()}()${property.getTypeHint() ? ': ' + property.getTypeHint() : ''}
    {
        return $this->${property.getName()};
    }
`
