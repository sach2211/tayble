
This documentation explains how to use this react-responsive-table.
## Features:
The features are :
* The table is responsive 
* The table can have any number of tables and columns 
* The data in table can be text or image 
* Custom CSS Classes can be applied. 

## Installation :
<pre>
<code>
    npm install tayble --save
</code>
</pre>

## Input : 
The input has to be an array of arrays (i.e. a 2D array).
        It may be a jagged array.  

## Example:
Example Usage :
 
Also import the module in your file :
<pre>
<code>
    import Table from 'tayble'
</pre>
</code>

Then  define data types, column headers and data for table as follows.
<pre>
<code>
    var rows = [
      ['1','2','3','4'],
      ['8','7','6','5']
    ]
    var headers = ['Col1', 'Col2', 'Col3', 'Col4'];
    var types = ['text', 'text', 'text', 'text'];
</code>
</pre>
Then you can define the table as follows : 

<pre>    
<code>
    < Table columnNumbers = '4' columnHeaders = {headers} columnTypes = {types} rowData = {rows}/>

</code>
</pre>

Here,

**columnNumbers** = Number of Columns you need

**columnHeaders** = An array containing the headings for columns

**columnTypes**   = An array containing type of data in different Columns.
                Type can be 'text' for alpha-numeric data or 'image' for images.

**rowData**       = The 2D array of data to display in the table.

**classes**       = The CSS classes to apply to your project.

**imageHeightPercent** = The height of image in %, if your data contain images.



For any questions or suggestions , you can reach out to us.


Thanks 
