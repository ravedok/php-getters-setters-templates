module.exports = (property) => `    
    public function ${property.getterName()}()${property.getTypeHint() ? ':' + property.getTypeHint() : ''}
    {
        return $this->${property.getName()};
    }
`
