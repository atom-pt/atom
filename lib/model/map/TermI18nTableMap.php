<?php


/**
 * This class defines the structure of the 'term_i18n' table.
 *
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TermI18nTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TermI18nTableMap';

	/**
	 * Initialize the table attributes, columns and validators
	 * Relations are not initialized by this method since they are lazy loaded
	 *
	 * @return     void
	 * @throws     PropelException
	 */
	public function initialize()
	{
	  // attributes
		$this->setName('term_i18n');
		$this->setPhpName('termI18n');
		$this->setClassname('QubitTermI18n');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(false);
		// columns
		$this->addColumn('NAME', 'name', 'VARCHAR', false, 1024, null);
		$this->addForeignPrimaryKey('ID', 'id', 'INTEGER' , 'term', 'ID', true, null, null);
		$this->addPrimaryKey('CULTURE', 'culture', 'VARCHAR', true, 16, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('term', 'term', RelationMap::MANY_TO_ONE, array('id' => 'id', ), 'CASCADE', null);
	} // buildRelations()

} // TermI18nTableMap
