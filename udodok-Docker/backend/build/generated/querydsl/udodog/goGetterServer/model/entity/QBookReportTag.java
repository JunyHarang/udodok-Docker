package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBookReportTag is a Querydsl query type for BookReportTag
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBookReportTag extends EntityPathBase<BookReportTag> {

    private static final long serialVersionUID = -182636195L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBookReportTag bookReportTag = new QBookReportTag("bookReportTag");

    public final QBookReport bookReport;

    public final NumberPath<Long> bookReportTagId = createNumber("bookReportTagId", Long.class);

    public final StringPath tagName = createString("tagName");

    public QBookReportTag(String variable) {
        this(BookReportTag.class, forVariable(variable), INITS);
    }

    public QBookReportTag(Path<? extends BookReportTag> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBookReportTag(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBookReportTag(PathMetadata metadata, PathInits inits) {
        this(BookReportTag.class, metadata, inits);
    }

    public QBookReportTag(Class<? extends BookReportTag> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.bookReport = inits.isInitialized("bookReport") ? new QBookReport(forProperty("bookReport"), inits.get("bookReport")) : null;
    }

}

